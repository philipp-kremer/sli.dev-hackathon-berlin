import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
    theme: {
        extend: {
            // fonts can be replaced here, remember to update the web font links in `index.html`
            colors: {
                accent: {
                    1: '#11c7e6',
                    2: '#3b9cda',
                    3: '#ffaa00',
                    4: '#ff6159',
                    5: '#12cf76',
                    6: '#d746f5',
                },
                background: {
                    midnight: '#001b41',
                    ionos: '#003d8f',
                    black: '#02102b',
                    gray: '#f2f5f8',
                }
            }
        },
    },
}))
