## front-end :

### repo:
https://github.com/kiyaesi/alirezamh

use `Node 14`
### build the front-end :
```
npm install
npm run build
```
builds at `./dist` directory

serve `./dist/.../` with `nginx`
## back-end :
### repo:
https://github.com/force1267/project

### install dependencies :
`npm install`

### install `pm2` process manager to keep the server running :
https://pm2.keymetrics.io/docs/usage/quick-start/

`npm install pm2@latest -g`

### start with `NODE_ENV=production` :
`NODE_ENV=production pm2 run --name server npm start`

### save the environment to run after possible restarts :
https://pm2.keymetrics.io/docs/usage/startup/

`pm2 startup`

`pm2 save`

serve the backend port `1337` at `admin.imamali.ca` using `nginx` reverse proxy

use currently available `nginx` configs at `/etc/nginx/`

### initial admin creds:

- email: `admin@example.com`
- user: `admin`
- pass: `admin`

log into the panel > `Settings` > `Users & Permissions plugin` > `Roles` > Edit `Public` Role 
grant read permissions (`find`, `findOne`) for conent-types to public users :

`About`, `Anouncement`, `Banner`, `Category`, `Event`, `Main-page`, `Main-page-event`,
`Sound`, `Sound-gallery`, `Video`, `Video-gallery`, `i18n` (`listLocales`)
