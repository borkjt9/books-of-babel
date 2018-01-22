<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp-db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'bi9.OD^VF@5>#HvgaMx0cZl,*r4Nl{#dJ D3]PKtL:Kzv3n?g52?_o,1?94GWf/=');
define('SECURE_AUTH_KEY',  '[) 2A5paBc23f>M|Y>Y3%1xG.roNa!*}Hib=`^g|*_6hlrx2-2B[Z?A9msyp`(o/');
define('LOGGED_IN_KEY',    'c M*YSF6we0aUJ]F$!*EvF=,mT+q>aa%snpJZtttc[HMRG:|(dCOR,/9--3C(B$B');
define('NONCE_KEY',        'kpwXvo==;zQ@~_)FQ9!+wp`#|,YP5KFpzt2h<y=`>0]U)b0/f(Afw4QQ@at2%IV2');
define('AUTH_SALT',        'L[o{Co%yJ|JYmsdTv=8|LPexVyXG*O@Fud(O#%6L)tpB/^GH(cCa_t7<xF`&+X1h');
define('SECURE_AUTH_SALT', '/x1e=u_xxLYUo7xm!,Y,-IAvRK@n@1<5&|2W^Cw+K!%|_2%EoKbmB@SaBz]KIgC.');
define('LOGGED_IN_SALT',   'cJ/3vHZu(Yt^IF?u.0W197+R6rhu_:{{p5]y9D%L~K#TqiPniuQ%}ICe6r8{NyWN');
define('NONCE_SALT',       'a9KPdHvVZK<b^>V(`6~:MnYKPg_w}x[xmLUS%E`5=-XO)1(!31aL;Dwn @(GsLH<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
