
# Take home test API

repository take home test API reqress

This is repository for API testing with Postman, using API from https://reqres.in/
1. Create user
2. Get user
3. Update user
4. Delete delete


**Notes:** The 'get user', 'update user', and 'delete user' endpoint can't use the ID from the 'create user' response, so I have decided to use a static ID.



## Installation

Clone the project

```bash
  git clone https://github.com/maqriki/API-reqress.git
```

Go to the project directory

```bash
  cd API-reqress
```

Install dependencies

```bash
  npm install
```


## Running Tests

### To run tests with html report, run the following command

```bash
  npm run test:html
```
you can access report html in newman directory

### To run tests with cli report

```bash
  npm run test:cli
```
### To run tests with allure report

```bash
  npm run test:allure
```

### To generate report allure tests

```bash
  npm run allure-report
```

### To checking report allure by pipeline, visit this url

```bash
  npm run allure-report
```