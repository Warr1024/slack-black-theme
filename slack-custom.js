﻿/*
 *  Portions Copyright (C)2018 by contributors:
 *      Aaron Suen (https://github.com/Warr1024)
 *      Arkadiusz Machalica (https://github.com/pokiujf)
 *      Bryan Keller (https://github.com/widget-)
 *      
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

document.addEventListener("DOMContentLoaded", function () {

    let warrCSS = `
        /* CHANGE DEFAULT TO SIMILAR TO "LOW-CONTRAST" THEME */
        :root {
            --primary: #CCC;
            --text: #999;
            --background: #222;
            --background-elevated: #111;
        }

        /* MISSED TOO-LIGHT BACKGROUNDS */
        .app_preview_link_slug, .internal_member_link, .internal_user_group_link, ts-mention, .c-member_slug, .c-reaction
            { background-color: #111 !important; }
        .c-mrkdwn__mention, .c-mrkdwn__broadcast { background-color: #440 !important; }
	.c-message--ephemeral { background-color: #000 !important; }

        /* TEXT TOO DARK EVERYWHERE */
        .c-message__body, .c-message__attachments, .c-message__attachments *,
            .c-menu_item__button, .channel_purpose_text, .pin_file_title
            { color: #aaa !important; }
        .c-unified_member__display-name, .snippet_preview { color: #777 !important; }

        /* "MEGAMOJI" */
        .emoji-only { line-height: 128px !important; font-size: 128px !important; }
        `;

    let pokiujfCSS = `
        :root {
            /* Modify these to change your theme colors: */
            --primary: #111;
            --text: #111;
            --background: #987;
            --background-elevated: #876;
            --text-mid: #555;

            /* These should be less important: */
            --background-hover: rgba(255, 255, 255, 0.1);
            --background-light: #AAA;
            --background-bright: #FFF;

            --border-dim: #666;
            --border-bright: var(--primary);

            --text-bright: #dcb;
            --text-special: var(--primary);

            --scrollbar-background: #000;
            --scrollbar-border: var(--primary);
        }

        /* left scrollbar */
        /*.TeamSidebar, .TeamSidebar .StoplightContainer, .TeamSidebar .TeamSidebar-addArea {*/
        /*background-color: var(--background) !important;*/
        /*box-shadow: var(--background) 1px 1px 25px;*/
        /*z-index: 1;*/
        /*}*/

        #channel_topic_text {
            background: var(--background);
        }

        .feature_name_tagging_client #edit_topic_inner:before {
            /*background-color: #ff00aa;*/
            border: 1px solid var(--text-mid);
        }

        .rxn .emoji_rxn_count,
        .feature_name_tagging_client .internal_member_link {
            background: var(--background-elevated);
            color: var(--text);
            font-weight: bold;
        }

        button.channel_header_icon,
        .channel_header_icon ts-icon,
        .channel_header_info button,
        .channel_topic_text,
        .channel_header_info,
        .channel_header_icon,
        .channel_header_info .channel_header_icon,
        .close_flexpane,
        .thread_participants {
            color: var(--text-mid) !important;
        }

        .channels_list_holder ul li a.channel_name,
        .channels_list_holder ul li:not(.unread) .group_name,
        .channels_list_holder ul li .im_name,
        .channels_list_holder ul li .mpim_name,
        .channels_list_holder ul li > a:link,
        ts-message.automated .message_body,
        ts-message .bot_label,
        ts-message a.timestamp {
            color: var(--text-mid) !important;
        }

        .btn {
            background: #2ab27b;
        }

        /* ----fixes after update--- */
        div.c-message.c-message--light.c-message--hover {
            background-color: var(--background-hover) !important;
        }

        div.c-message_list__day_divider__label__pill {
            color: var(--text) !important;
            background-color: var(--background-elevated) !important;
            border: 1px solid var(--text) !important;
        }

        hr.c-message_list__day_divider__line {
            border-top: 1px solid var(--background-elevated) !important;
        }

        span.c-timestamp__label {
            color: var(--text-mid) !important;
        }

        .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider:before {
            background-color: var(--background) !important;
            border-bottom: 1px solid var(--background-elevated) !important;
        }

        /* ------------------------- */

        /* -------fixes for 3.1.1--------*/
        .p-message_pane .c-message_list:not(.c-virtual_list--scrollbar),
        .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider {
            z-index: 0;
        }

        div.c-virtual_list__scroll_container,
        .c-virtual_list .c-virtual_list--scrollbar .c-message_list .c-scrollbar .c-scrollbar--fade,
        .c-menu,
        .c-message_actions__container .c-message__actions {
            background-color: var(--background) !important;
        }

        div.c-message:hover {
            background-color: var(--background) !important;
        }

        span.c-message__body,
        a.c-message__sender_link,
        span.c-message_attachment__media_trigger.c-message_attachment__media_trigger--caption,
        div.p-message_pane__foreword__description span {
            color: var(--text) !important;
        }

        .client_channels_list_container {
            margin-right: -1px;
            z-index: 203;
        }

        .search_form {
            border: 1px solid var(--text-mid);
        }

        /* ------------------------- */

        h1, h2, h3, h4 {
            color: var(--text);
        }

        .TeamSidebarItem.unreads .TeamSidebarItem-indicator {
            background-color: var(--border-bright) !important;
            opacity: 1;
        }

        .TeamSidebarItem-unreadHighlights {
            background-color: var(--border-bright) !important;
            color: var(--text-bright) !important;
        }

        #msgs_scroller_div::-webkit-scrollbar-track, #client_body::before, .client_container,
        #search_terms, #client_body, #footer, ts-message, .channel_header, ts-jumper ts-jumper-container,
        ts-jumper input[type="text"],
        .supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-track {
            background: var(--background) !important;
        }

        #channels_scroller.show_which_channel_is_active[class] li.active .presence.active i.presence_icon,
        #channels_scroller.show_which_channel_is_active[class] li.active .slackbot_icon,
        #channels_scroller.show_which_channel_is_active[class] li.active .presence.away i.presence_icon {
            color: inherit !important;
        }

        #client_body::before {
            border-bottom: 1px solid var(--background) !important;
        }

        ts-message, .channel_title .channel_name, ts-jumper input[type="text"],
        ts-jumper ol li .member_real_name, ts-jumper ol li .view_name, ts-jumper ol li .channel_name {
            color: var(--text) !important;
        }

        .light_theme ts-message .message_content a.message_sender, #msg_input::-webkit-input-placeholder,
        ts-jumper input[type="text"]::-webkit-input-placeholder {
            color: var(--text) !important;
        }

        #msg_input, #primary_file_button {
            background: transparent !important;
            color: var(--text) !important;
            border-color: var(--border-dim) !important;
        }

        .day_container .day_divider .day_divider_label, .day_divider .day_divider_label,
        #convo_container .convo_flexpane_divider .reply_count {
            color: var(--text) !important;
            background-color: var(--background-elevated) !important;
            border: 1px solid var(--border-bright) !important;
            border-radius: 1rem;
        }

        #convo_container .convo_flexpane_divider .reply_count {
            border-radius: 10px;
            padding: 0px 10px;
        }

        .mention_day_container_div .day_divider:before {
            background-color: transparent !important;
        }

        .day_container .day_msgs {
            border-top: 1px solid var(--border-dim) !important;
        }

        textarea, input[type="text"], #file_comment_textarea {
            background-color: var(--background) !important;
            border-color: var(--border-dim) !important;
            color: var(--text) !important;
        }

        textarea:focus, input[type="text"]:focus, #file_comment_textarea {
            border-color: var(--border-bright) !important;
            color: var(--text-bright) !important;
        }

        ts-message {
            border-radius: 5px;
            margin: 1px 5px !important;
            padding-right: 20px !important;
            border-left: 1px solid transparent !important; /* reserve space for hover */
            border-right: 1px solid transparent !important;
        }

        ts-message:hover {
            background: var(--background-hover) !important;
            /*border: 1px solid var(--border-bright) !important*/
        }

        /*#msgs_unread_divider + ts-message:hover, ts-message:first-child {
            margin-top: 1px !important;
        }
        ts-message:last-child {
            margin-bottom: 1px !important;
        }*/

        #messages_container::after {
            background: none !important;
        }

        .bot_label {
            padding: 0 4px !important;
            border-radius: 3px !important;
            background: var(--background) !important;
            border: 1px solid var(--border-bright);
        }

        .file_container:after {
            background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0, #333 100%) !important;
        }

        .rxn,
        #col_channels,
        #col_channels_footer,
        pre,
        ts-message .action_hover_container .btn_msg_action,
        #messages_container.has_top_messages_banner:before,
        .file_container,
        .file_container .CodeMirror .CodeMirror-code > div:before, .file_container .CodeMirror .sssh-line:before, .file_container .sssh-code .CodeMirror-code > div:before, .file_container .sssh-code .sssh-line:before,
        #col_flex,
        .search_message_result,
        #flex_contents .heading,
        #flex_contents .heading a,
        #flex_contents .subheading,
        .search_result_with_extract,
        #search_filters a,
        .menu,
        .menu #menu_items_scroller, .btn_outline {
            background: var(--background-elevated) !important;
        }

        .btn {
            background: #2ab27b;
        }

        pre,
        ts-message .action_hover_container .btn_msg_action,
        .file_container .CodeMirror .CodeMirror-code > div pre, .file_container .CodeMirror .sssh-line pre, .file_container .sssh-code .CodeMirror-code > div pre, .file_container .sssh-code .sssh-line pre,
        .search_message_result .search_message_result_meta a,
        .search_message_result .search_message_result_meta .date_links a,
        .flexpane_redesign #flex_contents .heading_text,
        #flex_contents .subheading,
        #search_filters.files #filter_files, #search_filters.messages #filter_messages,
        .menu ul li a,
        .btn, .btn_outline {
            color: var(--text) !important;
            border-color: var(--border-dim) !important;
        }

        .btn:hover:after {
            border-color: var(--border-bright);
        }

        .action_hover_container {
            border: 1px solid var(--border-dim) !important;
        }

        .ts_tip_float.btn_msg_action:not(:last-child) {
            border-right: 1px solid var(--border-dim) !important;
        }

        .ts_tip_float.btn_msg_action:hover {
            background-color: var(--background) !important;
        }

        #quick_switcher_btn {
            /*border-top-color: #333 !important;*/
            background-color: transparent;

        }

        .rxn,
        .search_result_with_extract,
        .flexbox_client.flexpane_redesign.flex_pane_showing #col_flex,
        .flexpane_redesign #flex_contents .heading,
        #flex_contents .subheading,
        .search_segmented_control,
        .menu {
            border-color: var(--border-dim) !important;
        }

        .search_result_with_extract {
            box-shadow: 0 1px 10px #555 !important;
        }

        .ql-placeholder {
            color: var(--text);
        }

        .ql-container.texty_single_line_input {
            background-color: var(--background-elevated);
            color: var(--text);
        }

        .ql-container .ql-editor p {
            color: var(--text);
        }

        #quick_switcher_btn:active, #quick_switcher_btn:focus, #quick_switcher_btn:hover {
            background-color: var(--background-elevated);
            border-color: var(--background-elevated);
        }

        .comment .mention, .feature_name_tagging_client .comment .mention, .feature_name_tagging_client ts-message .mention, ts-message .mention,
        span.match {
            border: 1px solid var(--border-bright);
            background-color: var(--background-elevated) !important;
            padding: 2px 4px;
            margin: 2px;
            border-radius: 10px;
        }

        .mention > .mention {
            /* I'm assuming this is a Slack bug */
            border: none;
        }

        pre.special_formatting {
            background: var(--background-elevated) !important;
        }

        code {
            color: var(--text-special) !important;
            background-color: var(--background-elevated) !important;
            border-color: var(--border-dim) !important;
        }

        .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-thumb,
        .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-thumb,
        .supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-thumb {
            /* scrollbar draggy bit */
            color: transparent !important;
            border: 1px solid var(--scrollbar-border) !important;
            background-color: transparent !important;
        }

        .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-track,
        .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-track,
        .supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-track {
            /* scrollbar endcaps */
            color: transparent !important;
            border: 1px solid var(--border-dim) !important;
            background-color: transparent !important;
        }

        a, a:link, a:visited {
            color: var(--text-special) !important;
        }

        ts-message a .mention {
            color: var(--text-special) !important;
        }

        a:hover {
            color: var(--text-special) !important;
        }

        #msgs_scroller_div #end_display_div p {
            color: var(--text);
        }

        #channels_scroller.show_which_channel_is_active ul li.active .im_name {
            color: #fff !important;
        }

        #msgs_div .unread_divider.no_unreads .divider_label {
            background: #000 !important;
            color: #aaa !important;
        }

        #msgs_div .unread_divider.no_unreads hr {
            border-top-color: #888 !important;
        }

        .flexpane_redesign #member_mentions {
            background-color: var(--background);
        }

        #details_tab .channel_page_section {
            background-color: var(--background-elevated);
        }

        #details_tab .channel_page_section .section_title {
            color: var(--text);
        }

        .greigh {
            /* greigh = label?? */
            color: var(--text) !important;
        }

        .pinned_item .pin_member_name a, .pinned_item {
            color: var(--text) !important;
        }

        .pinned_item .pinned_message_text .pin_truncate_fade {
            background: -webkit-gradient(linear, left bottom, left top, color-stop(0, var(--background-elevated)), color-stop(1, rgba(255, 255, 255, 0)));
        }

        .tab_container .file_list_item .contents .member, .tab_container .file_list_item .contents .service_link, .tab_container .file_list_item .contents .share_info, .tab_container .file_list_item .contents .time {
            color: var(--text-special);
        }

        .tab_container .file_list_item:focus, .tab_container .file_list_item:hover {
            background-color: var(--background-hover);
        }

        /* files */
        .file_container.generic_container .file_header_meta .meta_hover {
            background-color: transparent !important;
        }

        .file_preview_action.btn.ts_tip, .file_preview_link.btn.file_comment_link {
            border: 1px solid var(--border-bright) !important;
            background-color: var(--background-hover) !important;
            color: var(--text) !important;
        }

        .file_preview_action.btn.ts_tip:hover, .file_preview_link.btn.file_comment_link:hover {
            background-color: var(--background) !important;
        }

        /* emojis */
        .rxn[data-emoji] {
            /*background-color: var(--background-light) !important;
            transition: background-color 200ms ease-in;*/
            height: 28px;
        }

        .rxn[data-emoji]:hover {
            /*background-color: var(--background-bright) !important;*/
        }

        .rxn[data-emoji] .emoji_rxn_count {
            font-size: 0.9rem;
            /*color: black !important;*/
        }

        .rxn .emoji-sizer {
            background-color: transparent !important;
            border-radius: 7px;
            width: 24px;
            height: 24px;
            margin: 0 0 0 -2px !important;
            border: 1px solid transparent; /* looks silly but it makes the outline work */
        }

        .emoji-sizer {
            /* outline for black-on-transparent emojis */
            -webkit-filter: drop-shadow(1px 0 0 var(--background-bright)) drop-shadow(-1px 0 0 var(--background-bright)) drop-shadow(-0 1px 0 var(--background-bright)) drop-shadow(0 -1px 0 var(--background-bright));
            margin: 0 !important;
        }

        .ts_icon.ts_icon_smile_o {
            color: var(--text);
        }

        .emoji_menu_ng #emoji_input_container,
        #emoji_menu #emoji_menu_items_scroller,
        #emoji_menu #emoji_menu_footer,
        #emoji_menu #emoji_input_container {
            background-color: transparent;
        }

        .menu .p-emoji_picker__input_container,
        .menu .p-emoji_picker__list_container,
        .menu .p-emoji_picker__heading {
            background: transparent;
            color: var(--text);
        }

        #emoji_menu h3, #emoji_menu #emoji_preview_text {
            background-color: var(--background-elevated);
            color: var(--text);
        }

        #emoji_menu a.emoji_grouping_tab .emoji-sizer {
            -webkit-filter: none;
        }

        .emoji_menu_ng #emoji_menu_header .emoji_grouping_tab.active {
            background-color: transparent;
            border-color: var(--border-bright);
            border-width: 1px 1px 3px 1px;
            border-style: solid;
        }

        .light_theme .emoji-only {
            line-height: 3rem;
            font-size: 3rem;
            margin-top: 3px !important;
        }

        /* menus */
        .menu ul li a, .menu ul li:not(.disabled) a {
            border: 1px solid var(--background-elevated) !important;
        }

        .menu ul li.highlighted a, .menu ul li:hover:not(.disabled) a {
            background: var(--background-elevated) !important;
            border-color: var(--border-bright) !important;
        }

        .menu .section_header .header_label {
            color: var(--text) !important;
            background-color: var(--background-elevated) !important;
        }

        .menu .section_header hr {
            border-color: transparent;
        }

        /* channel list */
        body .channels_list_holder ul li {
            height: 1.8rem !important;
            border-radius: 0 15px 15px 0;
        }

        body .channels_list_holder ul li .primary_action {
            border: 1px solid rgba(0, 0, 0, 0.01) !important;
            background-color: transparent !important;
        }

        /*body #channels_scroller.show_which_channel_is_active ul li.active .primary_action {*/
        li.active {
            background-color: var(--background) !important;
            border: solid var(--border-bright);
            border-width: 1px 1px 1px 0;
        }

        .im_name_background {
            display: none;
        }

        li.active[class] span,
        #channels_scroller.show_which_channel_is_active[class] ul li.active .primary_action .prefix,
        #channels_scroller.show_which_channel_is_active[class] ul li.active .primary_action,
        #channels_scroller.show_which_channel_is_active[class] ul li.active .primary_action.im_name > *:not(.unread_highlights) {
            color: var(--text-special) !important;
            background-color: transparent;
            opacity: 1;
        }

        body .channels_list_holder ul li:hover {
            background-color: var(--background-hover);
            border-color: var(--border-dim) !important;
        }

        /* threads */
        ts-message .reply_bar:hover {
            background: var(--background) !important;
            border: 1px solid var(--border-dim) !important;
        }

        /* other */
        .special_formatting_quote .quote_bar {
            background: var(--border-bright) !important;
        }

        #details_toggle.active:hover, #recent_mentions_toggle.active:hover,
        #stars_toggle.active:hover {
            background-color: var(--background-hover);
            color: var(--text);
        }

        #details_toggle.active, #recent_mentions_toggle.active,
        #sli_recap_toggle.active, #stars_toggle.active {
            background-color: var(--background-elevated);
            border: 1px solid var(--border-bright);
        }

        #archives_return, .messages_banner {
            color: var(--text);
            background-color: var(--background-elevated);
            border: 1px solid var(--border-bright);
            border-bottom: 0px;
            border-radius: 10px 10px 0 0;
        }

        /* preferences page */
        #fs_modal, .modal, .modal-header, .modal-footer {
            background-color: var(--background-elevated);
        }

        #fs_modal, #fs_modal h1, #fs_modal h2,
        #fs_modal h3, #fs_modal h4, #fs_modal h5,
        .modal, .modal h1, .modal h2, .modal h3,
        .modal h4, .modal h5 {
            color: var(--text);
        }

        #fs_modal .fs_modal_file_viewer_header {
            background: transparent;
        }

        #fs_modal .fs_modal_file_viewer_content .viewer {
            background: var(--background);
        }

        .fs_modal_file_viewer_header .control_btn {
            color: var(--text) !important;
        }

        .section_rollup:hover:not(.is_active) {
            background: var(--background-hover);
            color: inherit;
        }

        #fs_modal #fs_modal_sidebar a {
            padding: 10px;
            background: transparent;
            border: 1px solid rgba(0, 0, 0, 0.01);
            border-radius: 10px;
        }

        #fs_modal #fs_modal_sidebar a:hover {
            border-color: var(--border-dim);
        }

        #fs_modal #fs_modal_sidebar a.is_active {
            border-color: var(--border-bright);
        }

        /* global (left sidebar) */

        #channel_scroll_down, #channel_scroll_up {
            background-color: var(--background) !important;
            border: 0 1px 1px 1px solid var(--border-bright) !important;
        }

        #team_menu, #quick_switcher_btn, #team_menu_overlay, #col_channels_overlay {
            border-color: transparent !important;
        }

        /* CodeMirror syntax highlighting */
        .cm-s-default .cm-header {
            color: #66f
        }

        .cm-s-default .cm-quote {
            color: #0f0
        }

        .cm-negative {
            color: #f44
        }

        .cm-positive {
            color: #2f2
        }

        .cm-s-default .cm-keyword {
            color: #f0a
        }

        .cm-s-default .cm-atom {
            color: #7ff
        }

        .cm-s-default .cm-number {
            color: #5fa
        }

        .cm-s-default .cm-def {
            color: #37f
        }

        .cm-s-default .cm-variable-2 {
            color: #09f
        }

        .cm-s-default .cm-variable-3 {
            color: #0fa
        }

        .cm-s-default .cm-comment {
            color: #f80
        }

        .cm-s-default .cm-string {
            color: #f33
        }

        .cm-s-default .cm-string-2 {
            color: #f50
        }

        .cm-s-default .cm-meta, .cm-s-default .cm-qualifier {
            color: #aaa
        }

        .cm-s-default .cm-builtin {
            color: #96f
        }

        .cm-s-default .cm-bracket {
            color: #ffa
        }

        .cm-s-default .cm-tag {
            color: #5f0
        }

        .cm-s-default .cm-attribute {
            color: #33f
        }

        .cm-s-default .cm-hr {
            color: #ccc
        }

        .cm-s-default .cm-link {
            color: #33f
        }

        /* Snippets */
        select {
            background-color: var(--background);
            color: var(--text);
            border-color: var(--border-dim);
        }

        .CodeMirror, .CodeMirror .CodeMirror-gutters, .CodeMirror-gutter {
            background-color: var(--background) !important;;
            border-color: var(--border-bright);
            color: var(--text);
        }

        .CodeMirror .CodeMirror-line {
            background-color: var(--background);
        }

        .CodeMirror-cursor {
            border-left-color: var(--text);
        }

        .CodeMirror-selected {
            background-color: rgba(255, 255, 255, 0.2) !important;
        }

        .modal div, .modal span, .modal label {
            color: var(--text);
        }

        .lazy_filter_select .lfs_list_container,
        .lazy_filter_select .lfs_list .lfs_item.active {
            background-color: var(--background-elevated);
        }

        .lfs_list::-webkit-scrollbar-track {
            display: none;
        }

        .lfs_list::-webkit-scrollbar-thumb {
            color: transparent !important;
            border: 1px solid var(--scrollbar-border) !important;
            background-color: transparent !important;
        }

        /* profile */
        #fs_modal #fs_modal_footer {
            background-color: var(--background-elevated)
        }

        #contents_container::-webkit-scrollbar-track {
            display: none;
        }

        #contents_container::-webkit-scrollbar-thumb {
            color: transparent !important;
            border: 1px solid var(--scrollbar-border) !important;
            background-color: transparent !important;
        }

        /* scroll border fix */
        .client_channels_list_container {
            border-right: none;
        }

        /* setting menu fix */
        #fs_modal.prefs_modal .global_notification_block {
            background: transparent;
            border: none;
        }

        #fs_modal.prefs_modal .global_notification_block.selected {
            background: transparent;
            border: 1px solid var(border-bright);
        }

        .notification_example.mac {
            color: #555459; /* default color - leave unthemed */
        }

        /* global jumper */
        ts-jumper, ts-jumper.active {
            background-color: rgba(32, 32, 32, 0.6);
        }

        ts-jumper ts-jumper-container {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 1);
        }
        `;

    let fullCSS = pokiujfCSS + warrCSS;

    let s = document.createElement('style');
    s.type = 'text/css';
    s.innerHTML = fullCSS;
    document.head.appendChild(s);

    document.querySelectorAll(".TeamView webview")
        .forEach(webview => {
        webview.addEventListener('ipc-message', message => {
            if (message.channel == 'didFinishLoading') {
                let script = `
                    let s = document.createElement('style');
                    s.type = 'text/css';
                    s.id = 'slack-custom-css';
                    s.innerHTML = \`${fullCSS}\`;
                    document.head.appendChild(s);
                    `;
                webview.executeJavaScript(script);
            }
        });
    });
});

