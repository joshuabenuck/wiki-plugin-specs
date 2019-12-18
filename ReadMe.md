# Federated Wiki - Specs Plugin

This plugin, type: specs, allows one to record properties of an object. It is meant to be used with the compare plugin.

## Configuration

The purpose of `specs` items is to store properties for a named entity for later comparison.

The first line of the content of the item is its name. The remaining lines are colon separated name / value pairs.

Example:
```
HP Omen 15
cpu: 4 core
ram: 8 gb
hdd: 1 tb
gpu: 1050
```

When rendered, only the first line is displayed. The remaining lines are hidden.

![Rendered view](screenshots/summary.png)

See the [compare plugin](https://github.com/joshuabenuck/wiki-plugin-compare) to learn how to compare the properties of one or more `specs` items.

## Build

    npm install

## License

MIT

