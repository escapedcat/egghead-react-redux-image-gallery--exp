const defaultState = {
  images: []
}

export default function images(state = defaultState, action) {
  switch(action.type) {
    case 'IMAGE_SELECTED':
console.info('IMAGE_SELECTED');
      return {...state, selectedImage: action.image};

    case 'IMAGES_LOADED':
console.info('IMAGES_LOADED');
      return {...state, images: action.images};

    case 'IMAGE_LOAD_FAILURE':
console.error('oh oh, IMAGE_LOAD_FAILURE');
      return state;

    default:
      return state;
  }
}