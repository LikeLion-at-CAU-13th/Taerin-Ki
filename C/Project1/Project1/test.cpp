#include <Stdio.h>

int main()
{
	int dan, y;
	dan = 2;
	while (dan < 10) {
		printf("%8d´Ü\n" ,dan);
		y = 1;
		while (y < 10) {
			printf("%2d * %2d = %2d\n", dan, y, dan * y);
			y++;
		}
		printf("\n\n");
		dan++;
	}
}