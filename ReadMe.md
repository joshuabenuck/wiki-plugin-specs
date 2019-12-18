# Federated Wiki - Specs Plugin

This plugin, type: specs, allows one to record properties of an object. It is meant to be used with the compare plugin.

## Configuration

The purpose of `specs` items is to store properties for a named entity for later comparison.

All lines of the config are colon separated name / value pairs.

The value of the property on the first line of the config is what will be displayed when the item is collapsed.

Example:
```
name: HP Omen 15
cpu: 4 core
ram: 8 gb
hdd: 1 tb
gpu: 1050
```

When rendered, only the value of the `name` property is displayed. The remaining content is hidden.

![Rendered view](screenshots/summary.png)

See the [compare plugin](https://github.com/joshuabenuck/wiki-plugin-compare) to learn how to compare the properties of one or more `specs` items.

## Build

    npm install

## License

MIT

