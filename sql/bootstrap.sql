BEGIN TRANSACTION;
INSERT INTO nodes (id, parent_id, created_at) VALUES ('_root', '_root', strftime('%s', 'now'));
INSERT INTO attributes(node_id, name, value) VALUES ('_root', 'name', 'Root node');
INSERT INTO attributes(node_id, name, value) VALUES ('_root', '_template', 'default');
COMMIT;