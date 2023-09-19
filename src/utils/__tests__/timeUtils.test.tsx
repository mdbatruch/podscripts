import { formatPodcastTime } from "utils/TimeUtil";


describe('timeUtils', () => {
    describe('formatPodcastTime', () => {
        it('should return the properly formatted time for podcasts', () => {
            const time = 30;
            expect(formatPodcastTime(time)).toEqual('00:00:30');
        });

        it('should return null if there is no time value passed', () => {
            const time = null;
            expect(formatPodcastTime(time)).toEqual(null);
        });
    });
});