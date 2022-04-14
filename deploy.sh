set -e


git checkout gh-pages

git add -f dist

git commit -m 'commit dist'

git subtree push --prefix dist origin gh-pages

cd -