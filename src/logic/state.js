const _state = {}

export const STATE = {
    apiPath: 'http://localhost:9999/',
    Get,
    Post,
}

function Get( entity) {
    if( !_state[entity]) return false;

    return _state[entity];
}

function Post( entity, value) {
    _state[entity] = value;
}