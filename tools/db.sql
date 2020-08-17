-- create table
CREATE TABLE "table_template"
(
    "id"         uuid not null unique,
    "created_at" timestamptz(3) default current_timestamp,
    "updated_at" timestamptz(3) default current_timestamp,
    PRIMARY KEY ("id")
);

create function auto_update_time() returns trigger
    language plpgsql as
$$
begin
    new.updated_at = current_timestamp;
    return new;
end
$$;

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON table_template
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();


-----------

-- user
CREATE TABLE "user"
(
    "id"                      uuid         not null unique,
    "created_at"              timestamptz(3) default current_timestamp,
    "updated_at"              timestamptz(3) default current_timestamp,
    "username"                varchar(255) not null unique,
    "name"                    varchar(255)   default null,
    "default_organization_id" uuid           default null,
    "phone"                   varchar(255)   default null,
    "email"                   varchar(255)   default null,
    "token"                   varchar(255) not null,
    "secret"                  varchar(255) not null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "user"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();

--- user_role
CREATE TABLE "user_role"
(
    "id"              uuid not null unique,
    "created_at"      timestamptz(3) default current_timestamp,
    "updated_at"      timestamptz(3) default current_timestamp,
    "user_id"         uuid           default null,
    "organization_id" uuid           default null,
    "user_acl_id"     uuid           default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "user_role"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();


-- user_organization
CREATE TABLE "user_organization"
(
    "id"         uuid not null unique,
    "created_at" timestamptz(3) default current_timestamp,
    "updated_at" timestamptz(3) default current_timestamp,
    "name"       varchar(255)   default null,
    "telephone"  varchar(255)   default null,
    "phone"      varchar(255)   default null,
    "address"    varchar(255)   default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "user_organization"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();


-- user_acl
CREATE TABLE "user_acl"
(
    "id"          uuid not null unique,
    "created_at"  timestamptz(3) default current_timestamp,
    "updated_at"  timestamptz(3) default current_timestamp,
    "name"        varchar(255)   default null,
    "permissions" jsonb          default null,
    "remark"      varchar(255)   default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "user_acl"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();

-- product
CREATE TABLE "product"
(
    "id"                  uuid not null unique,
    "created_at"          timestamptz(3) default current_timestamp,
    "updated_at"          timestamptz(3) default current_timestamp,
    "sn"                  varchar(255)   default null unique,
    "product_workflow_id" uuid           default null,
    "remark"              varchar(255)   default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "product"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();


-- product_workflow
CREATE TABLE "product_workflow"
(
    "id"           uuid not null unique,
    "created_at"   timestamptz(3) default current_timestamp,
    "updated_at"   timestamptz(3) default current_timestamp,
    "name"         varchar(255)   default null,
    "product_type" varchar(255)   default null,
    "workflow_id"  uuid           default null,
    "remark"       varchar(255)   default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "product_workflow"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();

-- product_log
CREATE TABLE "product_log"
(
    "id"                     uuid not null unique,
    "created_at"             timestamptz(3) default current_timestamp,
    "updated_at"             timestamptz(3) default current_timestamp,
    "product_id"             uuid           default null,
    product_workflow_id      uuid           default null,
    product_workflow_node_id uuid           default null,
    "result"                 int4           default null,
    "remark"                 varchar(255)   default null,
    operator_id              uuid           default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "product_log"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();


-- workflow
CREATE TABLE "workflow"
(
    "id"                 uuid not null unique,
    "created_at"         timestamptz(3) default current_timestamp,
    "updated_at"         timestamptz(3) default current_timestamp,
    "name"               varchar(255)   default null,
    "workflow_node_list" uuid[]         default null,
    "remark"             varchar(255)   default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "workflow"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();


-- workflow_node
CREATE TABLE "workflow_node"
(
    "id"         uuid not null unique,
    "created_at" timestamptz(3) default current_timestamp,
    "updated_at" timestamptz(3) default current_timestamp,
    "name"       varchar(255)   default null,
    "remark"     varchar(255)   default null,
    PRIMARY KEY ("id")
);

CREATE TRIGGER auto_updated_timestamp
    BEFORE UPDATE
    ON "workflow_node"
    FOR EACH ROW
EXECUTE PROCEDURE auto_update_time();

