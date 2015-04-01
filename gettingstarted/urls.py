from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

import hello.views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'gettingstarted.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'hello.views.index'),
    url(r'^users/', include('hello.urls')),
    url(r'^login$', 'hello.views.login_view'),
    url(r'^logout$', 'hello.views.logout_view'),
    url(r'^signup$', 'hello.views.signup'),
    url(r'^chat$', 'hello.views.chat'),
    url(r'^test$', 'hello.views.test'),
    url(r'^test12$', 'hello.views.test12'),
    url(r'^test11$', 'hello.views.test11'),
    url(r'^chkstatus$', 'hello.views.chkstatus'),
    url(r'^send_message$', 'hello.views.send_message'),
    url(r'^set_online$', 'hello.views.set_online'),
    url(r'^test13$', 'hello.views.test13'),
    url(r'^setcounter$', 'hello.views.setcounter'),
    url(r'^create_post$', 'hello.views.create_post'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', hello.views.index, name='index'),
    url(r'^db', hello.views.db, name='db'),
    url(r'^admin/', include(admin.site.urls)),

)
