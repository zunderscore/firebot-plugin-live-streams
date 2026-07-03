import type { UIExtension } from "@crowbartools/firebot-types";

const LiveStreamUIExtension: UIExtension = {
    id: "firebot-live-streams-plugin",
    pages: [
        {
            id: "live-streams",
            name: "Live Firebot Streams",
            // @ts-ignore
            type: "iframe",
            icon: "fa-tv-retro",
            fullPage: true,
            disableScroll: true,
            url: "https://firebot.app/watch"
        }
    ]
}

export { LiveStreamUIExtension };