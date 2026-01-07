-- 用户表
create table if not exists "user"
(
    id           bigserial primary key,
    "userAccount"  varchar(256) not null,
    "userPassword" varchar(512) not null,
    "userName"     varchar(256) null,
    "userAvatar"   varchar(1024) null,
    "userRole"     varchar(256) default 'user' not null,
    "createTime"   timestamp default current_timestamp not null,
    "updateTime"   timestamp default current_timestamp not null,
    "isDelete"     smallint default 0 not null
);

create index idx_userAccount on "user" ("userAccount");
