import {  AuthService } from "../src/AuthService";
const  authService = new  AuthService()

test('Successful registration and login with valid credentials.', async () => {
  expect(await  authService.register("nuevo@nuevo.com", "1234")).toBe(true);
  expect(await authService.login("nuevo@nuevo.com", "1234")).toBe(true);
  expect(await authService.register("nuevo@new.com", "1234")).toBe(true);
  expect(await authService.login("carlos@test.com", "xdxdxdxd")).toBe(true);
});


test('Unsuccessful registration due to an already taken username.', async () => {
  expect(await authService.register("carlos@test.com", "xdxdxdxd")).toBe(false);
  expect(await authService.register("nuevo@new.com", "1234")).toBe(false);
});

test('Unsuccessful login due to incorrect credentials.', async () => {
  expect(await authService.login("xdxd@xdxd.xdxd", "xdxdxdxd")).toBe(false);
  expect(await authService.login("carlos@test.com", "xdxdxdx")).toBe(false);
  expect(await authService.login("nuevo@new.co", "1234")).toBe(false);
});