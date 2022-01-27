var CSS = {
        DISCUSSION_EDIT: 'hsuforum-thread-edit',
        DISCUSSION_EXPANDED: 'hsuforum-thread-article-expanded',
        POST_EDIT: 'hsuforum-post-edit'
    },
    SELECTORS = {
        ADD_DISCUSSION: '#newdiscussionform input[type=submit]',
        ADD_DISCUSSION_TARGET: '.hsuforum-add-discussion-target',
        ALL_FORMS: '.hsuforum-reply-wrapper form',
        CONTAINER: '.mod-hsuforum-posts-container',
        CONTAINER_LINKS: '.mod-hsuforum-posts-container a',
        DISCUSSION: '.hsuforum-thread',
        DISCUSSIONS: '.hsuforum-threads-wrapper',
        DISCUSSION_EDIT: '.' + CSS.DISCUSSION_EDIT,
        DISCUSSION_BY_ID: '.hsuforum-thread[data-discussionid="%d"]',
        DISCUSSION_COUNT: '.hsuforum-discussion-count',
        DISCUSSION_TARGET: '.hsuforum-new-discussion-target',
        DISCUSSION_TEMPLATE: '#hsuforum-discussion-template',
        DISCUSSION_VIEW: '.hsuforum-thread-view',
        EDITABLE_MESSAGE: '[contenteditable]',
        EDITABLE_MESSAGE_TARGET: 'textarea[id^="editor-target-container"]:not([style*="display: none"])',
        EDITABLE_MESSAGE_ATTO: '[id^="editor-target-container"][contenteditable]:not([style*="display: none"])',
        FORM: '.hsuforum-form',
        FORM_ADVANCED: '.hsuforum-use-advanced',
        FORM_REPLY_WRAPPER: '.hsuforum-reply-wrapper',
        INPUT_FORUM: 'input[name="forum"]',
        INPUT_MESSAGE: 'textarea[name="message"]',
        INPUT_REPLY: 'input[name="reply"]',
        INPUT_SUBJECT: 'input[name="subject"]',
        LINK_CANCEL: '.hsuforum-cancel',
        NO_DISCUSSIONS: '.forumnodiscuss',
        NOTIFICATION: '.hsuforum-notification',
        OPTIONS_TO_PROCESS: '.hsuforum-options-menu.unprocessed',
        PLACEHOLDER: '.thread-replies-placeholder',
        POSTS: '.hsuforum-thread-replies',
        POST_BY_ID: '.hsuforum-post-target[data-postid="%d"]',
        POST_EDIT: '.' + CSS.POST_EDIT,
        POST_TARGET: '.hsuforum-post-target',
        RATE: '.forum-post-rating',
        RATE_POPUP: '.forum-post-rating a',
        REPLY_TEMPLATE: '#hsuforum-reply-template',
        SEARCH_PAGE: '#page-mod-hsuforum-search',
        VALIDATION_ERRORS: '.hsuforum-validation-errors',
        VIEW_POSTS: '.hsuforum-view-posts'
    },
    EVENTS = {
        DISCUSSION_CREATED: 'discussion:created',
        DISCUSSION_DELETED: 'discussion:deleted',
        FORM_CANCELED: 'form:canceled',
        POST_CREATED: 'post:created',
        POST_DELETED: 'post:deleted',
        POST_UPDATED: 'post:updated'
    };

M.mod_hsuforum = M.mod_hsuforum || {};
