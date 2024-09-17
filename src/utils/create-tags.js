const createTags = (tagType = 'div', classTag = '') => {
    const tag = document.createElement(tagType);
    tag.setAttribute('class', classTag);

    return tag;
};

export default createTags;
