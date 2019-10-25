<template>
    <div>
        <div>
            <button class="internationalization_button" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false />
                {{entry.title}}
            </button>
        </div>
        <p>{{ $t("message.hello") }}</p>
        <div id="calendar">
            <FullCalendar
                    ref="fullCalendar"
                    schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                    defaultView="resourceTimelineDay"
                    aspectRatio=4.0
                    weekNumberCalculation="ISO"
                    :header="{
                        left: 'today, prev,next',
                        center: 'title',
                        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                    }"
                    :views="{
                        resourceTimelineDay: {
                            buttonText: 'day',
                            slotDuration: '00:15:00',
                            minTime: '7:00:00',
                            maxTime: '21:00:00'
                        },
                        resourceTimelineWeek: {
                            type: 'resourceTimeline',
                            duration: { days: 7 },
                            buttonText: '7 days',
                            slotDuration: '00:15:00',
                            minTime: '7:00:00',
                            maxTime: '21:00:00'
                        }
                    }"
                    editable=true
                    resourceLabelText='Machines'
                    :plugins="calendarPlugins"
                    :events='calendarEvents'
                    :resources='calendarResources'
            />
        </div>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import interactionPlugin from '@fullcalendar/interaction'
    import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
    import { i18n } from '@/plugins/i18n'

    // import esLocale from '@fullcalendar/core/locales/es';

    export default {
        name: 'Planner',
        components: {
            FullCalendar
        },
        data () {
            return {
                languages: [
                    {
                        flag: 'it',
                        language: 'it',
                        title: 'Italian'
                    },
                    {
                        flag: 'gb',
                        language: 'gb',
                        title: 'English'
                    },
                    {
                        flag: 'de',
                        language: 'de',
                        title: 'Deutsch'
                    }
                ],
                calendarPlugins: [
                    interactionPlugin, // needed for dateClick
                    resourceTimelinePlugin
                ],
                calendarResources: [
                    {
                        id: 'a',
                        title: 'Macchina1'
                    },
                    {
                        id: 'b',
                        title: 'Macchina2'
                    }
                ],
                calendarEvents: [ // initial event data
                    {
                        id: '1',
                        resourceId: 'a',
                        title: 'ODL 1 - FASE 1',
                        start: '2019-08-27T12:30:00',
                        end: '2019-08-28T14:30:00',
                        allDay: false
                    },
                    {
                        id: '2',
                        resourceId: 'b',
                        title: 'ODL 1 - FASE 2',
                        start: '2019-08-27T12:30:00',
                        end: '2019-08-28T14:30:00',
                        allDay: false
                    }
                ],
            }
        },
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            }
        }
    }

</script>

<style lang='scss'>
    // you must include each plugins' css
    // paths prefixed with ~ signify node_modules
    @import '~@fullcalendar/core/main.css';
    @import '~@fullcalendar/timeline/main.css';
    @import '~@fullcalendar/resource-timeline/main.css';
</style>

<style scoped>
    #calendar {
        max-width: 1200px;
        margin: 50px auto;
        overflow-x: scroll;
    }
    .internationalization_button {
        padding: 5px;
        border: 1px solid green;
        font-size: 18px;
        margin: 10px;
    }
</style>