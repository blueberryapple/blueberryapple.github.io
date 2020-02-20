---
layout: post
title: "Rutorrent setup on Debian 9.11"
date: 2020-02-18 12:24 -0800
categories: linux
---

So recently I was trying to get wireguard running on osmc debian 9.11 and had the pleasure of screwing my network config at the kernel level. This meant I needed to reinstall osmc, as my backup was severely outdated and wouldn't work after restoring. Anyways I needed to re-setup my environment which meant reconfiguring rutorrent. Here are some issues I encountered when trying to install it following [this guide that is generally pretty helpful.](https://archive.is/aZU45)

---

## dependency problems when trying to install nginx, something about nginx-*
# symptom

{% highlight dmesg %}
dpkg: dependency problems prevent configuration of nginx:
...
nginx depends on nginx-full (>= 1.10.3-1+deb9u3) | nginx-light (>= 1.10.3-1+deb9u3) | nginx-extras (>= 1.10.3-1+deb9u3); however:
...
{% endhighlight %}

# solution
You need to follow [ooshro's post.](https://serverfault.com/a/241290) Basically, update apt and then reinstall all the nginx stuff.

---

## nginx port 80 already in use
# symptom

{% highlight dmesg %}
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
{% endhighlight %}

# solution
You need to change port 80 in your nginx configuration to something else like 3000.

---

## getplugins.php gives 502 error
# symptom

{% highlight dmesg %}
Bad response from server: (502 [error,getplugins]) Bad Gateway
{% endhighlight %}

# solution
Installing `php-fpm` with apt solved [the issue](https://serverfault.com/q/433265) for me.

---

## webserver user can't access external program
# symptom

{% highlight dmesg %}
Webserver user can't access 'stat' program. Some functionality will be unavailable. rutorrent
{% endhighlight %}

# solution
In the path `/var/www/rutorrent/conf/config.php` there is a `pathToExternals` section which needs to be updated to include the paths that the webserver has trouble accessing. [Thanks to null-dev!](https://github.com/Novik/ruTorrent/issues/1450#issuecomment-301522830)

---


## rtorrent user must have read/execute access
# symptom

{% highlight dmesg %}
rTorrent user must have read/execute access to the file ./test.sh (/var/www/rutorrent/php/test.sh)
{% endhighlight %}

# solution
Even after adding your user to the `www-data` group you still can't access the directories! [The solution is to just reboot or relogin.](https://stackoverflow.com/a/20059763)