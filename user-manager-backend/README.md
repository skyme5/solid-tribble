## API for managing users

## Development Setup

1. Clone and install the dependencies

```
git clone git@github.com:skyme5/stunning-chainsaw.git
cd stunning-chainsaw/user-manager-backend
pnpm install
```

2. Setup env file by copying `.env.example` to `.env`, change the required parameters
3. Start development server by running

```
pnpm start:dev
```

This will start server on port 3000 and Swagger Documentation will be available at http://localhost:3000/api/

### Requirements

1. Design database where following user information is stored

   - [x] First name and last name Both are mandatory
   - [x] Email, Mobile number Both should be unique, Mandatory, Valid Email, Valid 10 digit number
   - [x] Birthdate Optional
   - [x] Addresses One user can have multiple addresses, At least one address is mandatory
     - [x] Address line 1 Mandatory
     - [x] Address line 2 Optional
     - [x] Pincode Mandatory, should be min 4 length digit, max 6 length digit
     - [x] City Mandatory
     - [x] State Mandatory
     - [x] Type Home or Office

2. REST API endpoint to search users Only endpoint, no need for screen

   - [x] Add search endpoint with following filters Endpoint should return all users matching filters
   - [x] Search by string (on first name, last name, email).
   - [x] If one of three fields contains a given string as substring record is considered matched
   - [x] Search is case insensitive
   - [x] Search on Age
   - [x] Ex. should able to search a user with age 25 years greater equal
   - [x] Ex. should able to search users with ageless equal than 21 years
   - [x] Search by City
   - [x] Ex. I send “Mumbai” then a user with one of the addresses of Mumbai is returned
   - [x] Note: If multiple filters are applied then users matching all filters are returned only.
   - [x] Ex. send “Mumbai” and age greater equal 18. Then all users with “Mumbai” city address and age greater equal to 18 are returned.
   - [x] Make sure filters are performed using database query instead of in-memory filter

3. REST API endpoint to update the user information (including address)
   - [x] Proper validation has been done
