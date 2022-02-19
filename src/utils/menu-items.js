export default {
    items: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'home',
                    title: 'Home',
                    type: 'item',
                    url: '/home',
                    icon: 'feather icon-home',
                },
                {
                    id: 'analytics',
                    title: 'Analytics',
                    type: 'item',
                    url: '/analytics',
                    icon: 'feather icon-activity',
                },
            ]
        },
        {
            id: 'quick-menu',
            title: 'Quick Menu',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'product',
                    title: 'Product',
                    type: 'item',
                    url: '/product',
                    icon: 'feather icon-box',
                },
                {
                    id: 'category',
                    title: 'Category',
                    type: 'item',
                    url: '/category',
                    icon: 'feather icon-grid',
                },
                {
                    id: 'supplier',
                    title: 'Supplier',
                    type: 'item',
                    url: '/supplier',
                    icon: 'feather icon-circle',
                },
                {
                    id: 'order',
                    title: 'Order',
                    type: 'item',
                    url: '/order',
                    icon: 'feather icon-file-text',
                },
                {
                    id: 'promocode',
                    title: 'Sale',
                    type: 'item',
                    url: '/promocode',
                    icon: 'feather icon-star',
                },
                {
                    id: 'user',
                    title: 'User',
                    type: 'item',
                    url: '/user',
                    icon: 'feather icon-users',
                }
            ]
        },
        {
            id: 'webhost',
            title: 'Webhost',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'shoppe',
                    title: 'Shoppe',
                    type: 'item',
                    url: '/webhost/shoppe',
                    icon: 'feather icon-slack',
                    classes: 'nav-item disabled',
                },
            ]
        },
        {
            id: 'resources',
            title: 'Resources',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'upload-file',
                    title: 'Upload file',
                    type: 'item',
                    url: '/resources/upload',
                    icon: 'feather icon-upload',
                    classes: 'nav-item disabled',
                },
            ]
        },
        
    ]
}