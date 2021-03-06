import * as types from '../actions';
import min from 'lodash/collection/min';
import max from 'lodash/collection/max';
import map from 'lodash/collection/map';

const data_exploration = (state = {
  authors: [],
  loading: false,
  loadingControls: false,
  loadingAuthorsAndSections: false,
  dataset: null,
  datasetName: null,
  pipelineRangeStart: null,
  pipelineRangeEnd: null,
  error: null,
  pipelines: [],
  sections: []
}, action) => {
  switch (action.type) {
  case types.REQUEST_DATA_EXPLORATION_DATASET:
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  case types.RECEIVE_DATA_EXPLORATION_DATASET:
    let pipelineTimeRange = {};
    /* if it's a new dataset, we need new max and min timescales */
    /* TODO this assumes it has the property 'start' */
    if (state.datasetName !== action.data.results[0].Name) {
      pipelineTimeRange = {
        pipelineRangeStart: min(map(action.data.results[0].Docs, 'start')) * 1000,
        pipelineRangeEnd: max(map(action.data.results[0].Docs, 'start')) * 1000
      };
    }
    return Object.assign({}, state, {
      loading: false,
      dataset: action.data.results[0].Docs,
      datasetName: action.data.results[0].Name,
      error: null
    }, pipelineTimeRange);
  case types.DATA_EXPLORATION_FETCH_ERROR:
    return Object.assign({}, state, {
      loading: false,
      dataset: null,
      error: action.error
    });
  case types.REQUEST_EXPLORER_CONTROLS:
    return Object.assign({}, state, {
      loadingControls: true
    });
  case types.RECEIVE_EXPLORER_CONTROLS:
    return Object.assign({}, state, {
      loadingControls: false,
      pipelines: action.pipelines
    });

  case types.REQUEST_AUTHORS_AND_SECTIONS:
    return Object.assign({}, state, {
      loadingAuthorsAndSections: true
    });

  case types.RECEIVE_AUTHORS_AND_SECTIONS:
    return Object.assign({}, state, {
      loadingAuthorsAndSections: false,
      authors: Object.keys(action.data.results[0].Docs[0].data.authors),
      sections: Object.keys(action.data.results[0].Docs[0].data.sections)
    });
  default:
    return state;
  }
};

export default data_exploration;
