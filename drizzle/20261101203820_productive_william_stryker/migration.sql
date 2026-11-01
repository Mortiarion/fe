CREATE TABLE `clients` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL UNIQUE,
	`email` text,
	`phone` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`client_id` integer,
	`title` text,
	`qty` integer,
	`description` text,
	`status` text
);
