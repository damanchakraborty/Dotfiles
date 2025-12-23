#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
echo
echo
fastfetch
OS_ICON= 
PS1="\n \[\033[0;31m\]╭─────\[\033[0;31m\]\[\033[0;37m\]\[\033[41m\] $OS_ICON \u \[\033[0m\]\[\033[0;31m\]\[\033[0;31m\]─────\[\033[0;31m\]\[\033[0;30m\]\[\033[41m\] \w \[\033[0m\]\[\033[0;31m\] \n \[\033[0;31m\]╰ \[\033[1;31m\]\$ \[\033[0m\]"
