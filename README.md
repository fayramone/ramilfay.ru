# ramilfay.ru

personal site. built with hugo, custom theme, deployed via git hook.
no build tools except hugo itself.

## structure

```
content/
  notes/     — публичные заметки / public notes
  about/     — о себе / about
themes/
  ramilfay/  — тема / custom theme
```

## local

```bash
hugo server -D
```

## deploy

push to main → git hook on server runs `hugo` → nginx serves `/public`
