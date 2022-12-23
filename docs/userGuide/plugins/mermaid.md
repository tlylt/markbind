### Plugin: Mermaid 

This plugin allows you to utilize <tooltip content="Mermaid lets you create diagrams and visualizations using text and code">Mermaid</tooltip> by automatically importing the library and initializing the rendering of the diagrams.

> Mermaid is a JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

<box type="info">

All supported diagrams and detailed configurations are available in [the mermaid official documentation](https://mermaid-js.github.io/mermaid/).

</box>

To enable this plugin, add `mermaid` to your site's plugins. Optionally, you can specify alternative URL (e.g. to use another CDN or another version) or 
any custom configurations in the plugin context.

```js {heading="site.json"}
{
  ...
  "plugins": [
    "mermaid"
  ],
  "pluginsContext" : {
    "mermaid" : { // can be omitted if no changes to the following default settings are required
      "address": "https://unpkg.com/mermaid@9/dist/mermaid.esm.min.mjs", // replace with URL of your choice
      "config": {
        "startOnLoad": "true", // add or modify mermaid configurations
      }
    }
  },
}
```

{{ icon_example }} Pie Chart:

<include src="codeAndOutput.md" boilerplate >
<variable name="highlightStyle">html</variable>
<variable name="code">
<mermaid>
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
</mermaid>
</variable>
</include>

{{ icon_example }} Flowchart:

<include src="codeAndOutput.md" boilerplate >
<variable name="highlightStyle">html</variable>
<variable name="code">
<mermaid>
flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
</mermaid>
</variable>
</include>

{{ icon_example }} User Journey Diagram:

<include src="codeAndOutput.md" boilerplate >
<variable name="highlightStyle">html</variable>
<variable name="code">
<mermaid>
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
</mermaid>
</variable>
</include>

{{ icon_example }} Gitgraph Diagram:

<include src="codeAndOutput.md" boilerplate >
<variable name="highlightStyle">html</variable>
<variable name="code">
<mermaid>
gitGraph
    commit
    branch develop
    checkout develop
    commit
    checkout main
    merge develop
</mermaid>
</variable>
</include>