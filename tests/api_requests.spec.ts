import { test, expect, request } from '@playwright/test';

test('GET, POST, DELETE example for restful-api.dev', async () => {
 
  const apiContext = await request.newContext({
    baseURL: 'https://api.restful-api.dev',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });

  // GET objects

  const getResponse = await apiContext.get('/objects');
  expect(getResponse.ok()).toBeTruthy();

  const getData = await getResponse.json();
  console.log('GET objects:', getData);


  // POST objects

  const postResponse = await apiContext.post('/objects', {
    data: {
      name: 'Igor test object',
      data: {
        year: 2026,
        color: 'black'
      }
    }
  });

  expect(postResponse.ok()).toBeTruthy();

  const postData = await postResponse.json();
  console.log('POST created object:', postData);

  const createdId = postData.id;
  expect(createdId).toBeTruthy();


  // DELETE objects
    const deleteResponse = await apiContext.delete(`/objects/${createdId}`);
    expect(deleteResponse.ok()).toBeTruthy();

    const deleteData = await deleteResponse.json();
    console.log('DELETE result:', deleteData);
});
