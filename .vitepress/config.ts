import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/docs',
    titleTemplate: 'MenthaMC docs | :title',
    themeConfig: {
        siteTitle: 'MenthaMC',
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: "概述",
                collapsed: false,
                items: [{ text: "概述与指南", link: "/" }],
            },
            {
                text: "plugin",
                collapsed: false,
                items: [
                    { text: "概述", link: "plugin/overview" },
                    { text: "事件", link: "plugin/event" },
                    { text: "java", link: "plugin/java" },
                    { text: "配置", link: "plugin/config" },
                    { text: "指令", link: "plugin/command" }
                ]
            },
            {
                text: "misc",
                collapsed: false,
                items: [
                    { text: "warn_on_offine_mode", link: "misc/WarnOnOfflineMode" },
                    { text: "regionbar", link: "misc/RegionBar" },
                ]
            },
            {
                text: "optimisations",
                collapsed: false
            },
            {
                text: "experiment",
                collapsed: false,
                items: [
                    { text: "enable_datapack_function_command", link: "experiment/EnableDatapackFunctionCommand" },
                    { text: "enabled_folia_supported", link: "experiment/EnabledFoliaSupported" },
                    { text: "enabled_scoreboard", link: "experiment/EnabledScoreboard" },
                    { text: "fixed_teleport", link: "experiment/FixedTeleport" },
                    { text: "force_enable_command_block_execution", link: "experiment/ForceEnableCommandBlockExecution" },
                ]
            },
            {
                text: "fixes",
                collapsed: false
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/MenthaMC" },
        ],
    }
})
