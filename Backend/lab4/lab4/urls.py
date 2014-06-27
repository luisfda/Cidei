from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'lab4.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$','app.views.index',name='index'),
    url(r'^category/$', 'app.views.category'),
    url(r'^item/$', 'app.views.item'),
    url(r'^category/(?P<slug>[\w-]+)/$', 'app.views.detailsCategory'),
    url(r'^item/(?P<item_id>\d+)/$', 'app.views.detailsItem'),
    url(r'^about/$', 'app.views.about'),
    url(r'^items/add/$','app.views.add_item', name="add_item"),
)
