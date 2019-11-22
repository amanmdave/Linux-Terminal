#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/ioctl.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

// Usage man systemcall

int main(int argc, char const *argv[])
{

	if(strcmp(argv[1],"./man")==0)
		{
			if(strcmp(argv[2],"creat")==0)
			printf("Usage: creat pathname\nUsed to create files.\n");
			if(strcmp(argv[2],"man")==0)
			printf("Usage: man systemcall\nUsed to read manual for systemcall.\n");
			if(strcmp(argv[2],"open")==0)
			printf("Usage:open pathname\nUsed to open a file.\n");
			if(strcmp(argv[2],"read")==0)
			printf("Usage: read no_of_bytes pathname\nUsed to read from a file.\n");
			if(strcmp(argv[2],"write")==0)
			printf("Usage: write pathname text_to_write\nUsed to write text to a file\n");
			if(strcmp(argv[2],"kill")==0)
			printf("Usage: kill pid\nUsed to send signal to a process.\n");
			if(strcmp(argv[2],"fork")==0)
			printf("Usage: fork no_of_calls\nUsed to create a child process.\n");
			if(strcmp(argv[2],"ls")==0)
			printf("Usage: ls \nLists all the files in the directory.\n");
			
		}

}
