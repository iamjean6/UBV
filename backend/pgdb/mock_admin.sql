-- Mock Admin User for Testing
-- This assigns a bcrypt-hashed password for the auth.admins table
-- The password to use when logging in is: admin123

INSERT INTO auth.admins (username, email, password_hash)
VALUES (
    'mockadmin',
    'admin@urbanville.com',
    '$2y$10$WqBv4x3YmRj6m08T6UaJWe6N4b2O0w2f4NqH/hQ.L/eR5Q4J/E2Bq' -- This is 'admin123' generated using typical bcrypt settings
);
