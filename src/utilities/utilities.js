import config from '../config.json';
import { INIT_HEADER } from '../components/header/header.types.jsx';
import { INIT_PROFILE } from '../components/profile/profile.types';

export const initialize = (type) => {
    switch(type) {
        case INIT_HEADER:
            return initHeader(config.bio, config.styles);
        case INIT_PROFILE:
            return initProfile(config.bio);
    }
}

const initHeader = (bio, styles) => {
    return {
        showIcon: styles && styles.settingsIcon ? styles.settingsIcon : false,
        showSettings: false,
        projectLogo: bio.projectLogo && bio.projectLogo ? bio.projectLogo : ''
    }
}

const initProfile = (bio) => {
    return {
        name: bio.name && bio.name ? bio.name : '',
        rotateText: {
            primaryText: bio && bio.rotateText && bio.rotateText.primaryText ? bio.rotateText.primaryText: '',
            secondaryText: bio && bio.rotateText && bio.rotateText.secondaryText ? bio.rotateText.secondaryText : []
        },
        animateText: bio && bio.animateText ? bio.animateText : false,
        alternateText: bio && bio.alternateText ? bio.alternateText : '',
        typeTime: bio && bio.typeTime ? bio.typeTime : 200,
        deleteTime: bio && bio.deleteTime ? bio.deleteTime : 100,
        about: bio && bio.about ? bio.about : '' ,
        imageUrl: bio && bio.imageUrl ? bio.imageUrl : '',
        email: bio && bio.email ? bio.email : '',
        signature: bio && bio.signature ? bio.signature : ''
    }
}