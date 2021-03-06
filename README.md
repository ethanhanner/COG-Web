COG-Web: COG Web Interface
================================

By [Andy Sayler](https://www.andysayler.com) and [Others](CONTRIBUTORS)  
University of Colorado, Boulder

Status
------

COG-Web is currently running in Beta in production. Bug reports,
patches, and comments welcome.

Prereq
------

```
$ sudo gem2.0 install bundler
$ bundle install
```

Setup
-----

This site is built using Jekyll. To setup, copy `_defaults.yml` to
`_config.yml`. Then run `jekyll build`. Then deploy the resulting
`_site` directory.

Debug
-----

To enable debug logging, set the following in your JS console:

```
localStorage.debug = 'cog-web:*';
```

Dependencies
------------

The COG Web interface uses the following:

+ [Bundler](http://bundler.io/)
+ [Bootstrap](https://getbootstrap.com/)
+ [Jekyll](https://jekyllrb.com/)
+ [jQuery](https://jquery.com/)
+ [jquery.cookie](https://github.com/carhartl/jquery-cookie)
+ [debug.js](https://github.com/visionmedia/debug)
+ [async.js](https://github.com/caolan/async)
+ [ladda.js](https://github.com/hakimel/Ladda)

Related
-------

 * [COG](https://github.com/asayler/COG): COG Backend and API
 (This is where the magic is.)
 * [COG-CLI](https://github.com/asayler/COG-CLI): CLI Front-end

Licensing
---------

Copyright 2014, 2015 by Andy Sayler

This file is part of COG-Web.
 
COG-Web is free software: you can redistribute it and/or modify it
under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

COG-Web is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
License for more details.

You should have received a copy of the GNU Affero General Public
License along with COG-Web (see COPYING).  If not, see
http://www.gnu.org/licenses/.
