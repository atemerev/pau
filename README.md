# Pau: a hierarchical entity manager

## API examples

`createNode(id, parentId) // returns node ID`

`setAttribute(nodeId, name, value) // returns OK`

Sets node attribute. Values are untyped. All attributes starting  with `_` are 
system-level (affect rendering, etc). Others are application-level.

`setMetadata(nodeId, attribute, type, meta) // returns OK`

Sets metadata for rendering node attributes. Type is the attribute type
(so it can be rendered differently), meta is all other properties affecting 
the rendering.

`loadNode(id) // returns node object`. Loads everything required to render a node:
its ID, its parent ID, and a shallow list of children nodes and their attributes 
and most recent values.

*Todo:* load most recent values and metadata from the `recent` table, too. 

## List of system-level attributes

`_template`: the template ID used for rendering (or even React template code itself)
`_deleted`: if true, exclude from rendering