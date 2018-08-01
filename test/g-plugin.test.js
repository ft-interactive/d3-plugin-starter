/**
 * @file
 * Unit tests
 */

import { gplugin } from '..';

test('scaffold', () => {
    expect(gplugin()).toEqual(42);
});
