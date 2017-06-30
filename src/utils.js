/* eslint import/prefer-default-export: 0 */
// @flow
export function getImageUrl(id: string, height: number): string {
  return `https://images.jqestate.ru/${id}-jqestate-${height}`;
}
