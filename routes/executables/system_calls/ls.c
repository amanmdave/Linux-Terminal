#include  <stdio.h>
#include  <sys/types.h>
#include<string.h>
#include<ctype.h>
#include <stdio.h>
#include <dirent.h>

int main(int argc, char const *argv[])
{
    DIR *d;
  struct dirent *dir;
  d = opendir(".");
  if (d) {
    while ((dir = readdir(d)) != NULL) {
      printf("%s\n", dir->d_name);
    }
    closedir(d);
  }
  return(0);

}
