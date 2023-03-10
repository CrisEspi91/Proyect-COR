<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb8aa61bfcb8b358a7f86fa1a9cf41c3d
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitb8aa61bfcb8b358a7f86fa1a9cf41c3d', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb8aa61bfcb8b358a7f86fa1a9cf41c3d', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb8aa61bfcb8b358a7f86fa1a9cf41c3d::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
