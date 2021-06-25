BEGIN TRANSACTION;
INSERT INTO nodes (id, parent_id, created_at) VALUES ('_root', '_root', strftime('%s', 'now'));
INSERT INTO attributes(node_id, name, type, meta, value) VALUES ('_root', '_name', '_text', NULL, 'Root node');
INSERT INTO attributes(node_id, name, type, meta, value) VALUES ('_root', '_page_size', '_integer', NULL, 100);
INSERT INTO attributes(node_id, name, type, meta, value) VALUES ('_root', '_template', '_text', NULL, 'default');
COMMIT;