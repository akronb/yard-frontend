/* eslint import/prefer-default-export: 0 */
// @flow
export function getImageUrl(id: string, height: number): string {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${height}`;
}
