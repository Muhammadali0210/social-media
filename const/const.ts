export const tabs = [
    {
        name: 'Home',
        path: '/',
        icon: 'mdi:home'
    },
    {
      name: 'Explore',
      path: '/explore',
      icon: 'mdi:compass-outline'
    },
    { 
        name: 'Create',
        path: '/create',
        icon: 'mdi:add-box'
    },
    {
      name: "Message",
      path: '/message',
      icon: 'material-symbols:android-messages-outline'
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: 'mdi:account'
    }
]

export const cardBar = [
    [{
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4'
      }
    }], [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      shortcuts: ['E'],
      click: () => {
        console.log('Edit')
      }
    }, {
      label: 'Duplicate',
      icon: 'i-heroicons-document-duplicate-20-solid',
      shortcuts: ['D'],
      disabled: true
    }], [{
      label: 'Archive',
      icon: 'i-heroicons-archive-box-20-solid'
    }, {
      label: 'Move',
      icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      shortcuts: ['⌘', 'D']
    }]
  ]

export const moreModal = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Saved",
      icon: "mdi:bookmark",
    },
    {
      label: "Settings",
      icon: "mdi:cog",
    },
  ],
  [
    {
      label: "Logout",
      icon: "ooui:log-out-ltr",
      shortcuts: ["⌘", "D"],
    },
  ],
];

export const profileTabs = [{
  label: 'Posts',
  icon: 'mdi:card-account-details-outline',
  slot: 'all'
}, {
  label: 'Saved',
  icon: 'mdi:bookmark-multiple-outline',
  slot: 'posts'
}, {
  label: 'Tab3',
  icon: 'i-heroicons-eye-dropper',
  slot: 'texts'
}]