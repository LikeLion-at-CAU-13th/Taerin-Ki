#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

void palindrome(char munjayeol[])
{
	int len = 0;

	while (munjayeol[len] != '\0') {
		len++;
	}

	int a = 0;	// 맨 앞
	int b = len-1;	// 맨 뒤
	
	while (a < b) {
		if (munjayeol[a] != munjayeol[b]) {
			printf("회문이 아닙니다.");
			return;	// 회문이 아닐 경우 즉시 출력 후 종료해야 함.
		}
		a++;
		b--;
	}
	printf("회문 입니다.");	  // 끝까지 비교했을 때 다르지 않으면 회문!
}

int main()
{
	char munjayeol[100];
	printf("문자열 입력: ");
	scanf("%s", munjayeol);
	printf("\n");
	palindrome(munjayeol);
}