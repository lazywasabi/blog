/* global CMS */

/* Add CSS for editor preview */
CMS.registerPreviewStyle('/admin/preview.css');

/* Add Hugo shortcode support for editor */
/* YouTube */
CMS.registerEditorComponent({
  id: 'youtube',
  label: 'YouTube',
  fields: [
    {
      name: 'id',
      label: 'YouTube Video ID',
      widget: 'string',
    },
  ],
  pattern: /^{{< youtube ([a-zA-Z0-9]+) >}}/,
  fromBlock: function (match) {
    return {
      id: match[1],
    };
  },
  toBlock: function (obj) {
    return `{{< youtube ${obj.id} >}}`;
  },
  toPreview: function (obj) {
    return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="YouTube Video"/>`;
  },
});

/* Can I Use */
CMS.registerEditorComponent({
  id: 'caniuse',
  label: 'Can I Use',
  fields: [
    {
      name: 'feature',
      label: 'Can I Use Feature',
      widget: 'string',
    },
  ],
  pattern: /^{{< caniuse ([a-z0-9-]+) >}}/,
  fromBlock: function (match) {
    return {
      feature: match[1],
    };
  },
  toBlock: function (obj) {
    return `{{< caniuse ${obj.feature} >}}`;
  },
  toPreview: function (obj) {
    return `<img src="https://caniuse.bitsofco.de/image/${obj.feature}.jpg" alt="Can I Use"/>`;
  },
});

/* CodePen */
CMS.registerEditorComponent({
  id: 'codepen',
  label: 'CodePen',
  fields: [
    {
      name: 'username',
      label: 'CodePen Username',
      widget: 'string',
    },
    {
      name: 'id',
      label: 'CodePen ID',
      widget: 'string',
    },
  ],
  pattern: /^{{< codepen ([a-z0-9]+) ([a-zA-Z0-9]+) >}}/,
  fromBlock: function (match) {
    return {
      username: match[1],
      id: match[2],
    };
  },
  toBlock: function (obj) {
    return `{{< codepen ${obj.username} ${obj.id} >}}`;
  },
  toPreview: function (obj) {
    return `<iframe src="https://codepen.io/${obj.username}/embed/${obj.id}/?height=350&amp;theme-id=25051&amp;default-tab=result&amp;embed-version=2" width="100%" height="350"></iframe>`;
  },
});
