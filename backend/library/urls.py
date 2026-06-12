from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from books.views import (
    BookViewSet,
    AuthorViewSet
)

from borrow.views import BorrowViewSet

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

router = DefaultRouter()

router.register('authors', AuthorViewSet)
router.register('books', BookViewSet)
router.register('borrow', BorrowViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    path(
        'api/login/',
        TokenObtainPairView.as_view()
    ),

    path(
        'api/refresh/',
        TokenRefreshView.as_view()
    ),

    path(
        'api/',
        include(router.urls)
    ),
]