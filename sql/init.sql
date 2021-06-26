DROP TABLE IF EXISTS nodes;
DROP TABLE IF EXISTS attributes;
DROP TABLE IF EXISTS recent;

CREATE TABLE nodes (
    id TEXT NOT NULL PRIMARY KEY,
    parent_id INTEGER NOT NULL REFERENCES nodes(id),
    created_at INTEGER NOT NULL -- datetime
);

CREATE INDEX IF NOT EXISTS nodes_parent_id_index ON nodes(parent_id);
CREATE INDEX IF NOT EXISTS nodes_created_at_index ON nodes(created_at);

CREATE TABLE IF NOT EXISTS attributes (
    node_id NOT NULL REFERENCES nodes(id),
    name TEXT NOT NULL,
    value BLOB
);

CREATE UNIQUE INDEX IF NOT EXISTS attributes_nodeid_name_index ON attributes(node_id, name);

CREATE TABLE IF NOT EXISTS recent (
    node_id NOT NULL REFERENCES nodes(id),
    attribute_name NOT NULL REFERENCES attributes(name),
    type TEXT,
    meta TEXT,
    value TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS recent_node_id_attribute_name_index ON recent(node_id, attribute_name);