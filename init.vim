set number
set expandtab
set smarttab
set tabstop=4
set softtabstop=4
set shiftwidth=4
set noerrorbells
set novisualbell
set mouse=a
set nowrap
set autoread | au CursorHold * checktime | call feedkeys("lh")
" au CursorHold * checktime

" мапинг
:map losst <ESC>iHello world!<CR>
" плагины
call plug#begin()
Plug 'https://github.com/preservim/nerdtree'
call plug#end()

autocmd VimEnter * NERDTree
autocmd CursorHold,CursorHoldI * call NERDTreeFocus() | call g:NERDTree.ForCurrentTab().getRoot().refresh() | call g:NERDTree.ForCurrentTab().render() | wincmd w
