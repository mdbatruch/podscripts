/**
 * A helper function to format time into `00:00:00` format
 * 
 * @param time 
 * @returns string|null
 */
export const formatPodcastTime = <T extends number | null>(time: T): T extends number ? string : null => {
  if (time === null) return null as T extends number ? string : null;

  /**
   * Get the time by hours, minutes and seconds.
   * Add padStart to allow preprended 0's if it's just a single digit.
   */
  const hours = String(Math.floor(time / 3600)).padStart(2, '0');
  const minutes =  String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const seconds =  String(Math.floor(time % 60)).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}` as T extends number ? string : null;
};
