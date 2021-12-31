export default {
    items: [
        {
            id: 'home',
            title: 'Tài nguyên',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'dashboard',
                    title: 'Trang chủ',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                },
                {
                    id: 'product',
                    title: 'Sản phẩm',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'listProduct',
                            title: 'Danh sách sản phẩm',
                            type: 'item',
                            url: '/product'
                        },
                        {
                            id: 'litsCaterogy',
                            title: 'Danh mục sản phẩm',
                            type: 'item',
                            url: '/category'
                        },
                        {
                            id: 'litsSupplier',
                            title: 'Nhà cung cấp',
                            type: 'item',
                            url: '/supplier'
                        },
                    ]
                },
                {
                    id: 'order',
                    title: 'Đơn hàng',
                    type: 'item',
                    url: '/order',
                    icon: 'feather icon-file-text',
                },
                /* {
                    id: 'service',
                    title: 'Dịch vụ',
                    type: 'item',
                    url: '/service',
                    icon: 'feather icon-home',
                }, */
                {
                    id: 'sale',
                    title: 'Ưu đãi',
                    type: 'item',
                    url: '/sale',
                    icon: 'feather icon-star',
                },
                {
                    id: 'customer',
                    title: 'Khách hàng',
                    type: 'item',
                    url: '/customer',
                    icon: 'feather icon-users',
                },
                {
                    id: 'webhost',
                    title: 'Kênh bán hàng',
                    type: 'collapse',
                    icon: 'feather icon-slack',
                    children: [
                        {
                            id: 'shoppe',
                            title: 'Shoppe',
                            type: 'item',
                            url: '/webhost/shoppe'
                        },
                    ]
                },
                {
                    id: 'setting',
                    title: 'Cấu hình',
                    type: 'item',
                    url: '/setting',
                    icon: 'feather icon-settings',
                },
            ]
        },
    ]
}