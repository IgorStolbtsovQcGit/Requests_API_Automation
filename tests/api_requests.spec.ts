import { test, expect } from '@playwright/test';

test('GET /objects - returns list of objects', async ({ request }) => {
  const response = await request.get('/objects');
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  expect(Array.isArray(data)).toBeTruthy();
  console.log(data);
});

test('POST /objects - creates a new object', async ({ request }) => {
  const response = await request.post('/objects', {
    data: {
      name: 'Igor test object',
      data: {
        year: 2026,
        color: 'black',
      },
    },
  });

  expect(response.ok()).toBeTruthy();
  const created = await response.json();
  expect(created.id).toBeTruthy();
  expect(created.name).toBe('Igor test object');
  console.log('Created object ID:', created.id);
});


test('POST then DELETE /objects/:id - full lifecycle', async ({ request }) => {
  // Create
  const postResponse = await request.post('/objects', {
    data: {
      name: 'Igor test object2',
      data: { year: 2024, color: 'yellow' },
    },
  });
  expect(postResponse.ok()).toBeTruthy();
  const created = await postResponse.json();
  const id = created.id;
  expect(id).toBeTruthy();

  // Delete
  const deleteResponse = await request.delete(`/objects/${id}`);
  expect(deleteResponse.ok()).toBeTruthy();
  const result = await deleteResponse.json();
  console.log('DELETE result:', result);
});
